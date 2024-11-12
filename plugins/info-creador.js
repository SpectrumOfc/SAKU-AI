function handler(m) {
  // Lista fija de propietarios con nombre y número
  const data = [
    ['+56 9 4978 6710', '𝐒𝐀𝐊𝐔 𝐀𝐈 🦋'],
    ['+51 939 249 284', '𝐂𝐑𝐄𝐀𝐃𝐎𝐑 👑'],
    ['+54 9 3704 81-3556', '𝐎𝐖𝐍𝐄𝐑 ✅']
  ];

  // Enviamos un mensaje con información sobre los propietarios
  let message = "👑 *Lista de Propietarios* 👑\n\n";
  message += "Aquí están los contactos de los propietarios y creadores:\n\n";
  
  // Formateamos la información de los contactos con un subtítulo y breve descripción
  data.forEach(([id, name]) => {
    message += `🔹 *Nombre*: ${name}\n`;
    message += `🔹 *Número*: ${id}\n\n`;
  });

  // Enviamos los contactos de los propietarios
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m);

  // Enviamos el mensaje con la información adicional
  this.sendMessage(m.chat, message, m);
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
