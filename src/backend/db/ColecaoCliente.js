import {auth, db} from "../config";
import Cliente from "@/core/Cliente";

export default class ColecaoCliente {
    constructor() {
      this.conversor = {
        toFirestore(cliente) {
          return {
            nome: cliente.name,
            idade: cliente.age,
          };
        },
  
        fromFirestore(snapshot, options) {
          const dados = snapshot?.data(options);
          return new Cliente(dados.nome, dados.idade, snapshot.id);
        },
      };
    }
   
    async salvar(cliente) {
        if (cliente?.id) {
          await this.colecao().doc(cliente.id).set(cliente);
          return cliente;
        } else {
          const docRef = await this.colecao().add(cliente);
          const doc = await docRef.get();
          return doc.data();
        }
      }

      async excluir(cliente) {
        return this.colecao().doc(cliente.id).delete();
      }

      async obterTodos() {
        const query = await this.colecao().get();
        return query.docs.map((doc) => doc.data()) || [];
      }

      colecao() {
        return db.collection("clientes").withConverter(this.conversor);
      }
}