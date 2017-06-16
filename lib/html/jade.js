'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compilerBase = require('../compiler-base');

const inputMimeTypes = ['text/jade'];
let jade = null;

/**
 * @access private
 */
class JadeCompiler extends _compilerBase.SimpleCompilerBase {
  constructor() {
    super();
    this.compilerOptions.sourceMap = true;
  }

  static getInputMimeTypes() {
    return inputMimeTypes;
  }

  compileSync(sourceCode, filePath) {
    jade = jade || require('jade');

    let code = jade.render(sourceCode, Object.assign({ filename: filePath, cache: false }, this.compilerOptions));

    return { code, mimeType: 'text/html' };
  }

  getCompilerVersion() {
    return require('jade/package.json').version;
  }
}
exports.default = JadeCompiler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2phZGUuanMiXSwibmFtZXMiOlsiaW5wdXRNaW1lVHlwZXMiLCJqYWRlIiwiSmFkZUNvbXBpbGVyIiwiY29uc3RydWN0b3IiLCJjb21waWxlck9wdGlvbnMiLCJzb3VyY2VNYXAiLCJnZXRJbnB1dE1pbWVUeXBlcyIsImNvbXBpbGVTeW5jIiwic291cmNlQ29kZSIsImZpbGVQYXRoIiwicmVxdWlyZSIsImNvZGUiLCJyZW5kZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmaWxlbmFtZSIsImNhY2hlIiwibWltZVR5cGUiLCJnZXRDb21waWxlclZlcnNpb24iLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxpQkFBaUIsQ0FBQyxXQUFELENBQXZCO0FBQ0EsSUFBSUMsT0FBTyxJQUFYOztBQUVBOzs7QUFHZSxNQUFNQyxZQUFOLDBDQUE4QztBQUMzREMsZ0JBQWM7QUFDWjtBQUNBLFNBQUtDLGVBQUwsQ0FBcUJDLFNBQXJCLEdBQWlDLElBQWpDO0FBQ0Q7O0FBRUQsU0FBT0MsaUJBQVAsR0FBMkI7QUFDekIsV0FBT04sY0FBUDtBQUNEOztBQUVETyxjQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQztBQUNoQ1IsV0FBT0EsUUFBUVMsUUFBUSxNQUFSLENBQWY7O0FBRUEsUUFBSUMsT0FBT1YsS0FBS1csTUFBTCxDQUNUSixVQURTLEVBRVRLLE9BQU9DLE1BQVAsQ0FBYyxFQUFFQyxVQUFVTixRQUFaLEVBQXNCTyxPQUFPLEtBQTdCLEVBQWQsRUFBb0QsS0FBS1osZUFBekQsQ0FGUyxDQUFYOztBQUlBLFdBQU8sRUFBRU8sSUFBRixFQUFRTSxVQUFVLFdBQWxCLEVBQVA7QUFDRDs7QUFFREMsdUJBQXFCO0FBQ25CLFdBQU9SLFFBQVEsbUJBQVIsRUFBNkJTLE9BQXBDO0FBQ0Q7QUF0QjBEO2tCQUF4Q2pCLFkiLCJmaWxlIjoiamFkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2ltcGxlQ29tcGlsZXJCYXNlfSBmcm9tICcuLi9jb21waWxlci1iYXNlJztcblxuY29uc3QgaW5wdXRNaW1lVHlwZXMgPSBbJ3RleHQvamFkZSddO1xubGV0IGphZGUgPSBudWxsO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICovIFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmFkZUNvbXBpbGVyIGV4dGVuZHMgU2ltcGxlQ29tcGlsZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbXBpbGVyT3B0aW9ucy5zb3VyY2VNYXAgPSB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGdldElucHV0TWltZVR5cGVzKCkge1xuICAgIHJldHVybiBpbnB1dE1pbWVUeXBlcztcbiAgfVxuXG4gIGNvbXBpbGVTeW5jKHNvdXJjZUNvZGUsIGZpbGVQYXRoKSB7XG4gICAgamFkZSA9IGphZGUgfHwgcmVxdWlyZSgnamFkZScpO1xuXG4gICAgbGV0IGNvZGUgPSBqYWRlLnJlbmRlcihcbiAgICAgIHNvdXJjZUNvZGUsXG4gICAgICBPYmplY3QuYXNzaWduKHsgZmlsZW5hbWU6IGZpbGVQYXRoLCBjYWNoZTogZmFsc2UgfSwgdGhpcy5jb21waWxlck9wdGlvbnMpKTtcblxuICAgIHJldHVybiB7IGNvZGUsIG1pbWVUeXBlOiAndGV4dC9odG1sJyB9O1xuICB9XG4gIFxuICBnZXRDb21waWxlclZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoJ2phZGUvcGFja2FnZS5qc29uJykudmVyc2lvbjtcbiAgfVxufVxuIl19