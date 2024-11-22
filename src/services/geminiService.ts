import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function generateDescriptionWithGemini(
  imageBuffer: any
): Promise<string> {
  const prompt =
    'Gere uma descrição em um paragrafo em português do brasil para a seguinte imagem e me retorne somente a descrição';

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString('base64'),
        mimeType: 'image/png',
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || 'Alt-text não disponível.';
  } catch (error: any) {
    console.error('Erro ao obter alt-text:', error.message, error);
    throw new Error('Erro ao obter o alt-text do Gemini.');
  }
}
