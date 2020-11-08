const Discord = require("discord.js");
const { SlotMachine, SlotSymbol } = require("slot-machine");

module.exports = (client, message, args) => {
  if (!["604227193651986443","696481341566615664"].includes(message.author.id)) return;
  let numero = args.join(" ");

  try {
    if (!args[0])
      return message.channel.send("You must enter the amount to bet.");

    if (isNaN(parseInt(numero)))
      return message.channel.send("The amount to bet must be numerical!");

    if (parseInt(numero) < 5000)
      return message.reply("You cannot bet less than `5000`");

    if (parseInt(numero) > 5000000)
      return message.reply("You cannot bet more than `500000`");

    const machine = new SlotMachine(3, symbols());
    const results = machine.play();

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle("Slot Machine!");

    embed.description =
      (results.lines.slice(-2)[0].isWon ? "\n↘" : "\n⬛") +
      "   💲 | 💲  | 💲   " +
      (results.lines.slice(-1)[0].isWon ? "↙" : "⬛");

    for (let i = 0; i < results.lines.length - 2; i++) {
      embed.description +=
        (results.lines[i].isWon ? "\n➡   " : "\n⬛   ") +
        results.lines[i].symbols.map(s => s.display).join(" | ") +
        (results.lines[i].isWon ? "   ⬅" : "   ⬛");
    }

    embed.description +=
      (results.lines.slice(-1)[0].isWon ? "\n↗" : "\n⬛") +
      "   💲 | 💲  | 💲   " +
      (results.lines.slice(-2)[0].isWon ? "↖" : "⬛");

    const points = results.lines.reduce(
      (total, line) => total + line.points,
      0
    );
    const payout = numero * points;

    embed.addField(
      points ? "You've won!" : "You have lost!",
      points
        ? `You have won \`${payout.toLocaleString()}\``
        : "Luck for the next!"
    );

    const embedwin = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle("Slot Machine!");
        const embedloose = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle("Slot Machine!");
    
    // coins.coins += parseInt(payout);
    // coins.coins -= parseInt(numero);
    // await coins.save();
    message.channel.send(embed);
    message.channel.send(embedwin)
        message.channel.send(embedloose)
  } catch (e) {
    console.error(e);
  }
};

function symbols() {
  return [
    new SlotSymbol("1", {
      display: "🍒",
      points: 1,
      weight: 100
    }),
    new SlotSymbol("2", {
      display: "🍋",
      points: 1,
      weight: 100
    }),
    new SlotSymbol("3", {
      display: "🍇",
      points: 1,
      weight: 100
    }),
    new SlotSymbol("4", {
      display: "🍉",
      points: 1,
      weight: 100
    }),
    new SlotSymbol("5", {
      display: "🍊",
      points: 1,
      weight: 100
    }),
    new SlotSymbol("a", {
      display: "💵",
      points: 5,
      weight: 60
    }),
    new SlotSymbol("b", {
      display: "💰",
      points: 10,
      weight: 40
    }),
    new SlotSymbol("c", {
      display: "💎",
      points: 100,
      weight: 20
    }),
    new SlotSymbol("w", {
      display: "🃏",
      points: 1,
      weight: 40,
      wildcard: true
    })
  ];
}
