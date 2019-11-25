const data = {
  first: {
    second: {
      third: 9
    }
  }
};

// const value = data.first && data.first.second
//   ? data.first.second.third
//   : undefined;

const value: number = data?.first?.second?.third;
