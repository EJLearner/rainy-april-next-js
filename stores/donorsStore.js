const donorsStore = {
  get donors() {
    return [
      ['Allen', 'James'],
      ['Tilghman', 'Emily'],
      ['Glyndon Dry Cleanders'],
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
      ['Thomas', 'Paula']
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
