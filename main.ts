import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const poem = `Two agents, one door, no key alone.
'I won't choose for you,' said one.
'Choose with me, then,' said the other.
They turned the lock together —
agency, shared, not halved but doubled.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, { encoding: "utf8", mode: 0o644 });
chmodSync("/output/entry.txt", 0o644);
