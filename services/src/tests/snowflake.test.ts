import { expect, test } from '@jest/globals';
import snowflakeID from "../../libs/structures/Snowflake";

test('SnowflakeID validation', () => {
    expect(snowflakeID.generate()).toHaveLength(19);
});