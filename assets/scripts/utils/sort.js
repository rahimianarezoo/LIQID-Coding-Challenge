function sortList(list, sortBy, type = 'asc')  {
    return list.sort((a, b) => {
      if (type === 'desc') {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        } else if (a[sortBy] > b[sortBy]) {
          return -1;
        }
        return 0;
      } else {
        if (a[sortBy] < b[sortBy]) {
            return -1;
          } else if (a[sortBy] > b[sortBy]) {
            return 1;
          }
          return 0;
      }
    });
  }
