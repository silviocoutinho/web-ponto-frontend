const HeaderTableCertificate = {
  processo: 'Processo',
  curso: 'Curso',
  entidade: 'Entidade',
  carga_horaria: 'Carga Horária',
  data_emissao_certificado: 'Data Emissão',
  aceito: 'Status',
  data_aceite: 'Data do Aceite / Recusa',
  motivo_fim: 'Motivo Fim do Curso'  
};

const dataCertificates = [
  {
    processo: '001',
    curso: 'Ética no servico Publico ',
    entidade: 'UFScar',
    carga_horaria: '20h',
    data_emissao_certificado: '12/12/2020',
    aceito: true,
    data_aceite: '20/12/2020',
    motivo_fim: 'CACOF',
    matricula: 99,
  },
  {
    processo: '003',
    curso: 'Governacao de Dados ',
    entidade: 'ENAP',
    carga_horaria: '10h',
    data_emissao_certificado: '11/08/2020',
    aceito: true,
    data_aceite: '20/09/2020',
    motivo_fim: 'CACOF 3',
    matricula: 99,
  },
  {
    processo: '008',
    curso: 'Estatística',
    entidade: 'UFScar',
    carga_horaria: '25h',
    data_emissao_certificado: '05/09/2021',
    aceito: true,
    data_aceite: '20/10/2021',
    motivo_fim: 'CACOF 4',
    matricula: 99,
  },
];

export { HeaderTableCertificate, dataCertificates };
