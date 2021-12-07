//02-interfaces
var _this = this;
var user = {
    nombre: 'andres',
    apellido: 'llumiquinga',
    casado: 0,
    sueldo: 33.4,
    estado: 'AC',
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
