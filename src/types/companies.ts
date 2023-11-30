const companies = ['GrupoConsulTIC', 'UrbanMove', 'UVA'] as const;

type Companies = typeof companies;

export { type Companies, companies };
