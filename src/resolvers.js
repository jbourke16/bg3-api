export const resolvers = {
    Query: {
       characters: () => [
        {
            id: "1",
            name: "Astarion",
            race: "Elf",
            class: "Rogue",
            missions: [
                { id: "m1", title: "The Pale Elf", description: "Discover Astarion's mysterious past.", difficulty: "Medium" },
                { id: "m2", title: "Bloodlust", description: "help Astarion overcome his vampiric nature.", difficulty: "Hard" }
            ]
        },
        {
            id: "2",
            name: "Shadowheart",
            race: "Half-Elf",
            class: "Cleric",
            missions: [
                { id: "m3", title: "Shadow's Secrets", description: "Unravel the secrets of Shadowheart’s past.", difficulty: "Medium" }
            ]
        },
       ],
       character: (_, { name }) => ({
        id: "1",
        name: "Astarion",
        race: "Elf",
        class: "Rogue",
        missions: [
            { id: "m1", title: "The Pale Elf", description: "Discover Astarion's mysterious past.", difficulty: "Medium" },
            { id: "m2", title: "Bloodlust", description: "Help Astarion overcome his vampiric nature.", difficulty: "Hard" }
        ],
       }),
       missions: () => [
            { id: "m1", title: "The Pale Elf", description: "Discover Astarion's mysterious past.", difficulty: "Medium" },
            { id: "m2", title: "Bloodlust", description: "Help Astarion overcome his vampiric nature.", difficulty: "Hard" },
            { id: "m3", title: "Shadow’s Secrets", description: "Unravel the secrets of Shadowheart’s past.", difficulty: "Medium" },
        ],
    }
};