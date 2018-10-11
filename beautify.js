const fs = require('fs-extra');
const beautify = require('js-beautify');
const path = require('path');

const beautifyOptions = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: false,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
  unformatted: ['b', 'em']
};

const htmlBeautify = (target) => {
  const files = fs.readdirSync(target);
  files.forEach((file)=>{
    const fullpath = path.join(target, file);
    const stats =  fs.statSync(fullpath);
    if(stats.isDirectory()) {
      htmlBeautify(fullpath);
    } else {
      if(stats.size) {
        fs.readFile(path.join(target, file), 'utf8', (err, html) => {

          if (err) console.log(err);
          if (err) return;

          const result = beautify.html(html, beautifyOptions);

          fs.writeFile(path.join(target, file), result, 'utf8', err => {
            if (err) console.log(err);
          });
        });
      }
    }
  })
}

htmlBeautify('./dist');
