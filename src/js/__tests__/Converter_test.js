import { getBuffer } from "../getBuffer";
import { ArrayBufferConverter } from "../ArrayBufferConverter";

describe('Tests for the CharacterMath class', () => {
    let converter;

    beforeEach(() => {
        converter = new ArrayBufferConverter();
    })

    test('load() method saves the buffer', () => {
        const buffer = getBuffer();
        converter.load(buffer);
        expect(converter.buffer).toBe(buffer);
    })

    test('toString() method returns the original string', () => {
        const buffer = getBuffer();
        converter.load(buffer);
        expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    })

    test('toString() method returns the empty string', () => {
        expect(converter.toString()).toBe('');
    })

})
