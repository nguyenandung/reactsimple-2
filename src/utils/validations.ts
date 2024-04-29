// eslint-disable-next-line
export const fullnameReg =
  /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;
// eslint-disable-next-line
export const usernameReg = /^[a-zA-Z0-9]+$/;
// eslint-disable-next-line
export const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// eslint-disable-next-line
export const specialCharsReg = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
// eslint-disable-next-line
export const phoneReg =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

export const numberReg = '^(-?[0-9]+\\d*([.]\\d+)?)$|^(-?0[.]\\d*[0-9]+)$|^0$';
