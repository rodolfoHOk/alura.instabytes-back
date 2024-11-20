import { MongoClient } from 'mongodb';

export async function dbConnect(
  connectionString: string
): Promise<MongoClient> {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connectionString);
    console.log('Conectando ao cluster do banco de dados...');
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');
    return mongoClient;
  } catch (erro) {
    console.error('Falha na conexão com o banco!', erro);
    process.exit();
  }
}
