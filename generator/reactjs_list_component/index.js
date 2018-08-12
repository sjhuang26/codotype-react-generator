const { Generator } = require('codotype-generator');

module.exports = class ReactJSListComponent extends Generator {
  async write() {
    const rootDest = this.options.build.dest.client.src;

    for (let schema of this.options.build.app.schemas) {
      const dest = rootDest + schema.identifier + '/';
      await this.ensureDir(dest);
      await this.copyTemplate(
        this.templatePath(__dirname, 'component.js'),
        this.destinationPath(dest + schema.class_name + 'List.js'),
        { schema }
      )
      await this.copyTemplate(
        this.templatePath(__dirname, 'preview.js'),
        this.destinationPath(dest + schema.class_name + 'Preview.js'),
        { schema }
      )
    }
  }
}
