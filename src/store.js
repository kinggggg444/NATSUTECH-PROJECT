let pairingCode = null;
const sessions = new Map();

module.exports = {
  setPairingCode: (code) => { pairingCode = code; },
  getPairingCode: () => pairingCode,
  addSession: (id, sock) => sessions.set(id, sock),
  removeSession: (id) => sessions.delete(id),
  sessionCount: () => sessions.size,
};