import $api from '../http';

export default class TransactionService {
  static async fetchTransactions(userId) {
    return $api.get('/transactions/' + userId);
  }

  static async saveTransaction(body) {
    return $api.post('/transactions/', { body });
  }

  static async removeTransaction(id) {
    return $api.delete('/transactions/' + id);
  }
}
