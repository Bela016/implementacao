import { Empregado } from "./Empregado"

export class Horista extends Empregado {
    private valorHora: number;
    private horasTrabalhadas: number;


    public constructor(_nome: string, _cpf: string, _valorHora: number, _horasTrabalhadas: number) {
        super(_nome, _cpf)
        this.valorHora =_valorHora;
        this.horasTrabalhadas = _horasTrabalhadas
    }
    public setvalorHora(_valorHora: number): void {
        this.valorHora = _valorHora;
    }
    public getvalorHora(): number {
        return this.valorHora;
    }
    public sethorasTrabalhadas(_horasTrabalhadas: number): void {
        this.horasTrabalhadas = _horasTrabalhadas;
    }
    public gethorasTrabalhadas(): number{
        return this.horasTrabalhadas;
    }
    public vencimento():number{
        return this.valorHora + (this.valorHora*this.horasTrabalhadas);
    }

}