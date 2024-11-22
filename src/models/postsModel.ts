import {
  Document,
  InsertOneResult,
  MongoClient,
  ObjectId,
  WithId,
} from 'mongodb';
import { dbConnect } from '../config/dbConfig';

export type Post = {
  describe: string;
  imageUrl: string;
  alt: string;
};

export class PostsModel {
  private constructor(private dbConnection: MongoClient) {}

  public static async createPostsModel(): Promise<PostsModel> {
    const dbConnection = await dbConnect(process.env.MONGO_DB_URI as string);
    return new PostsModel(dbConnection);
  }

  async getAllPosts(): Promise<WithId<Document>[]> {
    const db = this.dbConnection.db('alura-instabytes');
    const collection = db.collection('posts');
    return collection.find().toArray();
  }

  async createPost(newPost: Post): Promise<InsertOneResult<Document>> {
    const db = this.dbConnection.db('alura-instabytes');
    const collection = db.collection('posts');
    return collection.insertOne(newPost);
  }

  async updatePost(id: string, post: Post) {
    const db = this.dbConnection.db('alura-instabytes');
    const collection = db.collection('posts');
    const objectId = ObjectId.createFromHexString(id);
    return collection.updateOne({ _id: objectId }, { $set: post });
  }
}
