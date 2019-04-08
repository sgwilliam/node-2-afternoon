let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    let { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.send(messages);
  },

  read: (req, res) => {
    res.send(messages);
  },

  update: (req, res) => {
    let { id } = req.params
    let { text } = req.body;
    

    let messageIndex = messages.findIndex( message => +message.id === +id);
    let message = messages[messageIndex]

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    // messages.splice( index, 1, text);

    res.send(messages);
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = messages.findIndex( message => +message.id === +id);
    messages.splice( index, 1 );

    res.send(messages);
  }
}