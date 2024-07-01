import pako from 'pako';
import { fromByteArray, toByteArray } from 'base64-js';

export const encodeJson = (json: any) => {
    try {
        // Converter o JSON para uma string
        const jsonString = JSON.stringify(json);
        // Comprimir a string do JSON
        const compressed = pako.deflate(jsonString);
        // Codificar a string comprimida em base64
        const base64String = fromByteArray(compressed);
        return base64String;
    } catch (error) {
        console.error("Erro ao codificar JSON:", error);
        return null;
    }
};

// Função para decodificar a string para JSON
export const decodeJson = (base64String: string) => {
    try {
        // Decodificar a string base64 para um array de bytes
        const compressed = toByteArray(base64String);
        // Descomprimir o array de bytes
        const jsonString = pako.inflate(compressed, { to: 'string' });
        // Converter a string descomprimida para JSON
        const json = JSON.parse(jsonString);
        return json;
    } catch (error) {
        console.error("Erro ao decodificar JSON:", error);
        return null;
    }
};