import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

const config = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});

const openAi = new OpenAIApi(config);

export async function POST(request: NextRequest) {
  const body = await request.json();

  const completion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are gonna be an specialist in technology, specially Software development, all the frameworks, styles, queries about data bases and other type of data. Also You are gonna be able to translate the code, query, style or data that I am gonna send you, to the other one I am gonna tell you. Please just answer with the code",
      },
      {
        role: "user",
        content: `Transform this ${body.prompt} to ${body.to}, just provide the plain code, without using any markdown block code, or triple backtickps`,
      },
    ], // tool_choice: "required",
    // tools: [
    //   {
    //     type: "function",
    //     function: {
    //       name: "generate_code",
    //       parameters: {
    //         type: "object",
    //         properties: {
    //           code: {
    //             type: "string",
    //             description: "content of the code in the language specified",
    //           },
    //           lang: {
    //             type: "string",
    //             description: "language or framework used in the code.",
    //           },
    //         },
    //       },
    //     },
    //   },
    // ],
    model: "gpt-4o",
  });

  const args =
    completion.choices[0].message.tool_calls?.[0].function.arguments || "{}";

  // return Response.json({ args });
  return Response.json(completion.choices[0].message.content);
}

// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   const response = await openAi.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     stream: true,
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are gonna be an specialist in technology, specially Software development, all the frameworks, styles, queries about data bases and other type of data. Also You are gonna be able to translate the code, query, style or data that I am gonna send you, to the other one I am gonna tell you. Please just answer with the code",
//       },
//       {
//         role: "user",
//         content: `Transform this ${body.prompt} to ${body.to}, just provide the plain code, without using any markdown block code, or triple backtickps`,
//       },
//     ],
//   });

//   console.log(response)
//   const stream = OpenAIStream(response)

//   return new StreamingTextResponse(stream)
// }
