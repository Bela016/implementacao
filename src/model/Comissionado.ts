import { Empregado } from "./Empregado"

export class Comissionado extends Empregado {
    private totalVendas: number;
    private taxaComissao: number;


    public constructor(_nome: string, _cpf: string, _totalVendas: number, _taxaComissao: number) {
        super(_nome, _cpf)
        this.totalVendas = _totalVendas;
        this.taxaComissao = _taxaComissao
    }
    public setTotalVendas(_totalVendas: number): void {
        this.totalVendas = _totalVendas;
    }
    public getTotalVendas(): number {
        return this.totalVendas;
    }
    public setTaxaComissao(_taxaComissao: number): void {
        this.taxaComissao = _taxaComissao;
    }
    public getTaxaComissao(): number{
        return this.taxaComissao;
    }
    public vencimento():number{
        return this.totalVendas + (this.totalVendas*this.taxaComissao);
    }

}