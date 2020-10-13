// token decode 함수

const Token = {
  decodeToken: (token) => {
    let payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }
};

export default Token;
