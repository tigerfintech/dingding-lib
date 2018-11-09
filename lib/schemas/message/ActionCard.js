'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Basic2 = require('./Basic');

var _Basic3 = _interopRequireDefault(_Basic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * see https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.1ed14a97oOZVAo&treeId=257&articleId=105735&docType=1
 */

var ActionCard = function (_Basic) {
    _inherits(ActionCard, _Basic);

    function ActionCard(options) {
        _classCallCheck(this, ActionCard);

        var _this = _possibleConstructorReturn(this, (ActionCard.__proto__ || Object.getPrototypeOf(ActionCard)).call(this, options));

        _this.title = options.title;
        _this.text = options.text;
        _this.btns = options.btns, _this.btnOrientation = options.btnOrientation !== 1 ? 0 : 1;
        _this.hideAvatar = options.hideAvatar !== 1 ? 0 : 1;
        return _this;
    }

    _createClass(ActionCard, [{
        key: 'toJS',
        value: function toJS() {
            return {
                msgtype: 'actionCard',
                actionCard: {
                    title: this.title,
                    text: this.text,
                    hideAvatar: '' + this.hideAvatar,
                    btnOrientation: '' + this.btnOrientation,
                    btns: this.btns.map(function (item) {
                        return { title: item.title, actionURL: item.actionUrl };
                    })
                }
            };
        }
    }]);

    return ActionCard;
}(_Basic3.default);

exports.default = ActionCard;