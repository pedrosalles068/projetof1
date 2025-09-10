import fastify from "fastify"; 
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
    origin: "*"
});

const teams = [
    { id: 1, name: "Ferrari", base : "Maranello, Italy" },
    { id: 2, name: "Mercedes", base : "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base : "Milton Keynes, United Kingdom" },
    { id: 4, name: "McLaren", base : "Woking, United Kingdom" },
    { id: 5, name: "Alpine", base : "Enstone, United Kingdom" },
    { id: 6, name: "Aston Martin", base : "Silverstone, United Kingdom" },
    { id: 7, name: "Williams", base : "Grove, United Kingdom" },
    { id: 8, name: "AlphaTauri", base : "Faenza, Italy" },
    { id: 9, name: "Haas", base : "Kannapolis, United States" },
    { id:10, name : "Stake Sauber", base : "Hinwil, Switzerland" }
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Yuki Tsunoda", team: "Red Bull Racing" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 5, name: "Lando Norris", team: "McLaren" },
  { id: 6, name: "Oscar Piastri", team: "McLaren" },
  { id: 7, name: "George Russell", team: "Mercedes" },
  { id: 8, name: "Kimi Antonelli", team: "Mercedes" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Franco Colapinto", team: "Alpine" },
  { id: 13, name: "Alex Albon", team: "Williams" },
  { id: 14, name: "Carlos Sainz", team: "Williams" },
  { id: 15, name: "Liam Lawson", team: "Racing Bulls" },
  { id: 16, name: "Isack Hadjar", team: "Racing Bulls" },
  { id: 17, name: "Nico Hülkenberg", team: "Kick Sauber" },
  { id: 18, name: "Gabriel Bortoleto", team: "Kick Sauber" },
  { id: 19, name: "Oliver Bearman", team: "Haas" },
  { id: 20, name: "Esteban Ocon", team: "Haas" },
];


app.get("/teams", async (request, reply) => {
    reply.type("application/json").code(200);
    return teams;
});

app.get("/drivers", async (request, reply) => {
    reply.type("application/json").code(200);
    return drivers;
});

app.get("/drivers/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const driver = drivers.find(d => d.id === parseInt(id));
    if (driver) {
        reply.type("application/json").code(200);
        return driver;
    } else {
        reply.type("application/json").code(404);
        return { error: "Piloto não encontrado" };
    }
});

app.listen({port: 3000}, (err, address) => {
     console.log(`Server listening at ${address}`);
     if (err) {
         app.log.error(err);
         process.exit(1);
     }
});

