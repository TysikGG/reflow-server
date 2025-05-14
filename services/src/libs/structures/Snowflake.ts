import { Snowflake } from "@sapphire/snowflake";

class SnowflakeID {
    epochString: string;
    epoch: Date;
    snowflake: Snowflake;

    constructor() {
        this.epochString = process.env.EPOCH || "2000-01-01T00:00:00.000Z";
        this.epoch = new Date(this.epochString);
        this.snowflake = new Snowflake(this.epoch);
    }

    generate() {
        return this.snowflake.generate().toString();
    }

    decode(value: string) {
        return this.snowflake.decode(value);
    }

    deconstruct(value: string) {
        return this.snowflake.deconstruct(value);
    }
}

export default new SnowflakeID;