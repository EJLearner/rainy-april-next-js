const donorsStore = {
  get donors() {
    return [
      ['Allen Jr', 'James'],
      ['Pasienza', 'Emily'],
      ['Glyndon Dry Cleaners'],
      ['Pierce', 'Lori and Will'],
      ['Anderson', 'Avis and Greg'],
      ['Allen', 'Delores'],
      ['Brown', 'Kim & James'],
      ['Clash', 'Janice'],
      ['Diamond', 'Lester'],
      ['Ford', 'Iris'],
      ['Galloway', 'Kesha'],
      ['Johnson', 'Stacey'],
      ['Newberger', 'Dan'],
      ['Rather', 'Elaine'],
      ['Reed', 'Greg & Vonda'],
      ['Rice', 'Jasmen'],
      ['Richards', 'Jerome'],
      ['Thomas', 'Paula'],
      ['Gaunt', 'Terry'],
      ['Apampa', 'Olakunle'],
      ['Anderson', 'Candice'],
      ['Williams', 'Nadia'],
      ['Ajayi', 'Juwon'],
      ['Ajayi', 'Adejare'],
      ['Barriffe', 'Alisande']
    ]
      .sort((a, b) => {
        const [lastA, firstA] = a;
        const [lastB, firstB] = b;

        const lastNameSortValue = lastA.localeCompare(lastB);

        return lastNameSortValue || firstA.localeCompare(firstB);
      })
      .map(([last = '', first = '']) => `${first} ${last}`);
  }
};

export default donorsStore;
