import { Comissionado } from "../model/comissionado";
import { Assalariado } from "../model/Assalariados";
import { Horista } from "../model/horista";

const a1 = new Assalariado('beatriz', '763.484.230-34', 4500, 2022)

a1.setNome(`beatriz`);
a1.setCpf(`763.484.230-34`);
a1.setSalario(4500);
console.log(`Nome: ${a1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado('julia', '787.498.430-39`', 4000, 0.09);

c1.setNome(`julia`);
c1.setCpf(`787.498.430-39`);
c1.setTotalVendas(4000);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salario: ${c1.getTaxaComissao()} Total Vendas: ${c1.getTotalVendas}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista('alberto', '787.498.430-39', 500, 12);

h1.setNome(`alberto`);
h1.setCpf(`787.498.430-39`);
h1.setvalorHora(500);
h1.sethorasTrabalhadas(12);
console.log(`Nome: ${h1.getNome()}, Cpf: ${h1.getCpf()}`);
console.log(`Valor Hora ${h1.getvalorHora()} Horas trabalhadas: ${h1.gethorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);
