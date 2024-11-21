import { Document, InsertOneResult, MongoClient, WithId } from 'mongodb';
import { dbConnect } from '../config/dbConfig';

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

  async createPost(newPost: any): Promise<InsertOneResult<Document>> {
    const db = this.dbConnection.db('alura-instabytes');
    const collection = db.collection('posts');
    return collection.insertOne(newPost);
  }
}
