const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function refactor(file) {
  if (!file.endsWith('.ts') && !file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace absolute @/app/... imports
  content = content.replace(/@\/app\/components\//g, "@/src/components/");
  content = content.replace(/@\/app\/hooks\//g, "@/src/hooks/");
  content = content.replace(/@\/app\/lib\//g, "@/src/utils/");
  content = content.replace(/@\/app\/context\//g, "@/src/context/");
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}

walkDir('./app', refactor);
walkDir('./src', refactor);
