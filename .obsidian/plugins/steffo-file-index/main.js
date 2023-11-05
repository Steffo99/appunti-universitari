/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SteffoFileIndexPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var _reloadIgnoreRegExpsIfIgnoreFileChangedBinding, _recreateFileIndexBinding;
var _SteffoFileIndexPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.ignoreRegExps = [];
    __privateAdd(this, _reloadIgnoreRegExpsIfIgnoreFileChangedBinding, this.reloadIgnoreRegExpsIfIgnoreFileChanged.bind(this));
    __privateAdd(this, _recreateFileIndexBinding, this.recreateFileIndex.bind(this));
  }
  async reloadIgnoreRegExps() {
    const ignoreFile = this.app.vault.getAbstractFileByPath(_SteffoFileIndexPlugin.FILE_IGNORE_PATH);
    if (ignoreFile === null) {
      console.debug("[SteffoFileIndexPlugin] Ignore file does not exist, not ignoring anything:", _SteffoFileIndexPlugin.FILE_IGNORE_PATH);
      this.ignoreRegExps = [];
    } else if (ignoreFile instanceof import_obsidian.TFolder) {
      console.debug("[SteffoFileIndexPlugin] Ignore file is actually a folder, not ignoring anything:", _SteffoFileIndexPlugin.FILE_IGNORE_PATH);
      this.ignoreRegExps = [];
    } else if (ignoreFile instanceof import_obsidian.TFile) {
      const ignoreJSON = await this.app.vault.cachedRead(ignoreFile);
      const ignoreContents = JSON.parse(ignoreJSON);
      this.ignoreRegExps = ignoreContents.map((re) => new RegExp(re));
      console.debug("[SteffoFileIndexPlugin] Determined ignore list to be:", this.ignoreRegExps);
    } else {
      console.error("[SteffoFileIndexPlugin] Ignore file is of an unknown type, not doing anything:", _SteffoFileIndexPlugin.FILE_IGNORE_PATH);
    }
  }
  async reloadIgnoreRegExpsIfIgnoreFileChanged(file) {
    if (file.path === _SteffoFileIndexPlugin.FILE_IGNORE_PATH) {
      await this.reloadIgnoreRegExps();
    }
  }
  async recreateFileIndex() {
    const files = this.app.vault.getFiles();
    const basenames = {};
    const paths = [];
    for (const file of files) {
      let ignored = false;
      for (const regexp of this.ignoreRegExps) {
        if (file.path.match(regexp)) {
          ignored = true;
          break;
        }
      }
      if (ignored) {
        continue;
      }
      paths.push(file.path);
      basenames[file.basename] = file.path;
    }
    paths.sort();
    const index = { basenames, paths };
    console.debug("[SteffoFileIndexPlugin] Determined index to be:", index);
    const indexContents = JSON.stringify(index, null, "	");
    const indexFile = this.app.vault.getAbstractFileByPath(_SteffoFileIndexPlugin.FILE_INDEX_PATH);
    if (indexFile === null) {
      console.debug("[SteffoFileIndexPlugin] File index does not exist, creating it right now at:", _SteffoFileIndexPlugin.FILE_INDEX_PATH);
      await this.app.vault.create(_SteffoFileIndexPlugin.FILE_INDEX_PATH, indexContents);
    } else if (indexFile instanceof import_obsidian.TFolder) {
      console.debug("[SteffoFileIndexPlugin] Cannot create file index, as there's a folder at:", _SteffoFileIndexPlugin.FILE_INDEX_PATH);
    } else if (indexFile instanceof import_obsidian.TFile) {
      console.debug("[SteffoFileIndexPlugin] File index already exists, overwriting contents of:", _SteffoFileIndexPlugin.FILE_INDEX_PATH);
      await this.app.vault.modify(indexFile, indexContents);
    } else {
      console.error("[SteffoFileIndexPlugin] File index is of an unknown type, not doing anything:", _SteffoFileIndexPlugin.FILE_INDEX_PATH);
    }
  }
  async onload() {
    this.addCommand({
      id: "steffo-file-index-recreate",
      name: "Force file index recreation",
      callback: this.recreateFileIndex.bind(this)
    });
    this.app.workspace.onLayoutReady(async () => {
      await this.reloadIgnoreRegExps();
      await this.recreateFileIndex();
      this.registerEvent(
        this.app.vault.on("create", __privateGet(this, _reloadIgnoreRegExpsIfIgnoreFileChangedBinding))
      );
      this.registerEvent(
        this.app.vault.on("delete", __privateGet(this, _reloadIgnoreRegExpsIfIgnoreFileChangedBinding))
      );
      this.registerEvent(
        this.app.vault.on("rename", __privateGet(this, _reloadIgnoreRegExpsIfIgnoreFileChangedBinding))
      );
      this.registerEvent(
        this.app.vault.on("create", __privateGet(this, _recreateFileIndexBinding))
      );
      this.registerEvent(
        this.app.vault.on("delete", __privateGet(this, _recreateFileIndexBinding))
      );
      this.registerEvent(
        this.app.vault.on("rename", __privateGet(this, _recreateFileIndexBinding))
      );
    });
  }
  onunload() {
  }
};
var SteffoFileIndexPlugin = _SteffoFileIndexPlugin;
_reloadIgnoreRegExpsIfIgnoreFileChangedBinding = new WeakMap();
_recreateFileIndexBinding = new WeakMap();
SteffoFileIndexPlugin.FILE_IGNORE_PATH = "steffo-file-index-ignore.json";
SteffoFileIndexPlugin.FILE_INDEX_PATH = "steffo-file-index.json";
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtQbHVnaW4sIFRGaWxlLCBURm9sZGVyfSBmcm9tIFwib2JzaWRpYW5cIlxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlZmZvRmlsZUluZGV4IHtcblx0YmFzZW5hbWVzOiB7W2Jhc2VuYW1lOiBzdHJpbmddOiBzdHJpbmd9LFxuXHRwYXRoczogc3RyaW5nW10sXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RlZmZvRmlsZUluZGV4UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblx0c3RhdGljIEZJTEVfSUdOT1JFX1BBVEggPSBcInN0ZWZmby1maWxlLWluZGV4LWlnbm9yZS5qc29uXCJcblxuXHRpZ25vcmVSZWdFeHBzOiBSZWdFeHBbXSA9IFtdXG5cblx0YXN5bmMgcmVsb2FkSWdub3JlUmVnRXhwcygpIHtcblx0XHRjb25zdCBpZ25vcmVGaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKFN0ZWZmb0ZpbGVJbmRleFBsdWdpbi5GSUxFX0lHTk9SRV9QQVRIKVxuXG5cdFx0aWYoaWdub3JlRmlsZSA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5kZWJ1ZyhcIltTdGVmZm9GaWxlSW5kZXhQbHVnaW5dIElnbm9yZSBmaWxlIGRvZXMgbm90IGV4aXN0LCBub3QgaWdub3JpbmcgYW55dGhpbmc6XCIsIFN0ZWZmb0ZpbGVJbmRleFBsdWdpbi5GSUxFX0lHTk9SRV9QQVRIKVxuXHRcdFx0dGhpcy5pZ25vcmVSZWdFeHBzID0gW11cblx0XHR9XG5cdFx0ZWxzZSBpZihpZ25vcmVGaWxlIGluc3RhbmNlb2YgVEZvbGRlcikge1xuXHRcdFx0Y29uc29sZS5kZWJ1ZyhcIltTdGVmZm9GaWxlSW5kZXhQbHVnaW5dIElnbm9yZSBmaWxlIGlzIGFjdHVhbGx5IGEgZm9sZGVyLCBub3QgaWdub3JpbmcgYW55dGhpbmc6XCIsIFN0ZWZmb0ZpbGVJbmRleFBsdWdpbi5GSUxFX0lHTk9SRV9QQVRIKVxuXHRcdFx0dGhpcy5pZ25vcmVSZWdFeHBzID0gW11cblx0XHR9XG5cdFx0ZWxzZSBpZihpZ25vcmVGaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcblx0XHRcdGNvbnN0IGlnbm9yZUpTT04gPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKGlnbm9yZUZpbGUpXG5cdFx0XHRjb25zdCBpZ25vcmVDb250ZW50czogc3RyaW5nW10gPSBKU09OLnBhcnNlKGlnbm9yZUpTT04pXG5cdFx0XHR0aGlzLmlnbm9yZVJlZ0V4cHMgPSBpZ25vcmVDb250ZW50cy5tYXAoKHJlKSA9PiBuZXcgUmVnRXhwKHJlKSlcblx0XHRcdGNvbnNvbGUuZGVidWcoXCJbU3RlZmZvRmlsZUluZGV4UGx1Z2luXSBEZXRlcm1pbmVkIGlnbm9yZSBsaXN0IHRvIGJlOlwiLCB0aGlzLmlnbm9yZVJlZ0V4cHMpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIltTdGVmZm9GaWxlSW5kZXhQbHVnaW5dIElnbm9yZSBmaWxlIGlzIG9mIGFuIHVua25vd24gdHlwZSwgbm90IGRvaW5nIGFueXRoaW5nOlwiLCBTdGVmZm9GaWxlSW5kZXhQbHVnaW4uRklMRV9JR05PUkVfUEFUSClcblx0XHR9XG5cdH1cblxuXHRhc3luYyByZWxvYWRJZ25vcmVSZWdFeHBzSWZJZ25vcmVGaWxlQ2hhbmdlZChmaWxlOiBURmlsZSkge1xuXHRcdGlmKGZpbGUucGF0aCA9PT0gU3RlZmZvRmlsZUluZGV4UGx1Z2luLkZJTEVfSUdOT1JFX1BBVEgpIHtcblx0XHRcdGF3YWl0IHRoaXMucmVsb2FkSWdub3JlUmVnRXhwcygpXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIEZJTEVfSU5ERVhfUEFUSCA9IFwic3RlZmZvLWZpbGUtaW5kZXguanNvblwiXG5cblx0YXN5bmMgcmVjcmVhdGVGaWxlSW5kZXgoKSB7XG5cdFx0Y29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpXG5cblx0XHRjb25zdCBiYXNlbmFtZXM6IHtbYmFzZW5hbWU6IHN0cmluZ106IHN0cmluZ30gPSB7fVxuXHRcdGNvbnN0IHBhdGhzID0gW11cblxuXHRcdGZvcihjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG5cdFx0XHRsZXQgaWdub3JlZCA9IGZhbHNlXG5cdFx0XHRmb3IoY29uc3QgcmVnZXhwIG9mIHRoaXMuaWdub3JlUmVnRXhwcykge1xuXHRcdFx0XHRpZihmaWxlLnBhdGgubWF0Y2gocmVnZXhwKSkge1xuXHRcdFx0XHRcdGlnbm9yZWQgPSB0cnVlXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoaWdub3JlZCkge1xuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0fVxuXG5cdFx0XHRwYXRocy5wdXNoKGZpbGUucGF0aClcblx0XHRcdGJhc2VuYW1lc1tmaWxlLmJhc2VuYW1lXSA9IGZpbGUucGF0aFxuXHRcdH1cblxuXHRcdHBhdGhzLnNvcnQoKVxuXG5cdFx0Y29uc3QgaW5kZXg6IFN0ZWZmb0ZpbGVJbmRleCA9IHtiYXNlbmFtZXMsIHBhdGhzfVxuXHRcdGNvbnNvbGUuZGVidWcoXCJbU3RlZmZvRmlsZUluZGV4UGx1Z2luXSBEZXRlcm1pbmVkIGluZGV4IHRvIGJlOlwiLCBpbmRleClcblxuXHRcdGNvbnN0IGluZGV4Q29udGVudHMgPSBKU09OLnN0cmluZ2lmeShpbmRleCwgbnVsbCwgXCJcXHRcIilcblxuXHRcdGNvbnN0IGluZGV4RmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChTdGVmZm9GaWxlSW5kZXhQbHVnaW4uRklMRV9JTkRFWF9QQVRIKVxuXHRcdGlmKGluZGV4RmlsZSA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5kZWJ1ZyhcIltTdGVmZm9GaWxlSW5kZXhQbHVnaW5dIEZpbGUgaW5kZXggZG9lcyBub3QgZXhpc3QsIGNyZWF0aW5nIGl0IHJpZ2h0IG5vdyBhdDpcIiwgU3RlZmZvRmlsZUluZGV4UGx1Z2luLkZJTEVfSU5ERVhfUEFUSClcblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShTdGVmZm9GaWxlSW5kZXhQbHVnaW4uRklMRV9JTkRFWF9QQVRILCBpbmRleENvbnRlbnRzKVxuXHRcdH1cblx0XHRlbHNlIGlmKGluZGV4RmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpIHtcblx0XHRcdGNvbnNvbGUuZGVidWcoXCJbU3RlZmZvRmlsZUluZGV4UGx1Z2luXSBDYW5ub3QgY3JlYXRlIGZpbGUgaW5kZXgsIGFzIHRoZXJlJ3MgYSBmb2xkZXIgYXQ6XCIsIFN0ZWZmb0ZpbGVJbmRleFBsdWdpbi5GSUxFX0lOREVYX1BBVEgpXG5cdFx0fVxuXHRcdGVsc2UgaWYoaW5kZXhGaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcblx0XHRcdGNvbnNvbGUuZGVidWcoXCJbU3RlZmZvRmlsZUluZGV4UGx1Z2luXSBGaWxlIGluZGV4IGFscmVhZHkgZXhpc3RzLCBvdmVyd3JpdGluZyBjb250ZW50cyBvZjpcIiwgU3RlZmZvRmlsZUluZGV4UGx1Z2luLkZJTEVfSU5ERVhfUEFUSClcblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShpbmRleEZpbGUsIGluZGV4Q29udGVudHMpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIltTdGVmZm9GaWxlSW5kZXhQbHVnaW5dIEZpbGUgaW5kZXggaXMgb2YgYW4gdW5rbm93biB0eXBlLCBub3QgZG9pbmcgYW55dGhpbmc6XCIsIFN0ZWZmb0ZpbGVJbmRleFBsdWdpbi5GSUxFX0lOREVYX1BBVEgpXG5cdFx0fVxuXHR9XG5cblx0I3JlbG9hZElnbm9yZVJlZ0V4cHNJZklnbm9yZUZpbGVDaGFuZ2VkQmluZGluZyA9IHRoaXMucmVsb2FkSWdub3JlUmVnRXhwc0lmSWdub3JlRmlsZUNoYW5nZWQuYmluZCh0aGlzKVxuXHQjcmVjcmVhdGVGaWxlSW5kZXhCaW5kaW5nID0gdGhpcy5yZWNyZWF0ZUZpbGVJbmRleC5iaW5kKHRoaXMpXG5cblx0YXN5bmMgb25sb2FkKCkge1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnc3RlZmZvLWZpbGUtaW5kZXgtcmVjcmVhdGUnLFxuXHRcdFx0bmFtZTogJ0ZvcmNlIGZpbGUgaW5kZXggcmVjcmVhdGlvbicsXG5cdFx0XHRjYWxsYmFjazogdGhpcy5yZWNyZWF0ZUZpbGVJbmRleC5iaW5kKHRoaXMpXG5cdFx0fSlcblxuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IHRoaXMucmVsb2FkSWdub3JlUmVnRXhwcygpXG5cdFx0XHRhd2FpdCB0aGlzLnJlY3JlYXRlRmlsZUluZGV4KClcblxuXHRcdFx0dGhpcy5yZWdpc3RlckV2ZW50KFxuXHRcdFx0XHR0aGlzLmFwcC52YXVsdC5vbihcImNyZWF0ZVwiLCB0aGlzLiNyZWxvYWRJZ25vcmVSZWdFeHBzSWZJZ25vcmVGaWxlQ2hhbmdlZEJpbmRpbmcpXG5cdFx0XHQpXG5cdFx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQoXG5cdFx0XHRcdHRoaXMuYXBwLnZhdWx0Lm9uKFwiZGVsZXRlXCIsIHRoaXMuI3JlbG9hZElnbm9yZVJlZ0V4cHNJZklnbm9yZUZpbGVDaGFuZ2VkQmluZGluZylcblx0XHRcdClcblx0XHRcdHRoaXMucmVnaXN0ZXJFdmVudChcblx0XHRcdFx0dGhpcy5hcHAudmF1bHQub24oXCJyZW5hbWVcIiwgdGhpcy4jcmVsb2FkSWdub3JlUmVnRXhwc0lmSWdub3JlRmlsZUNoYW5nZWRCaW5kaW5nKVxuXHRcdFx0KVxuXG5cdFx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQoXG5cdFx0XHRcdHRoaXMuYXBwLnZhdWx0Lm9uKFwiY3JlYXRlXCIsIHRoaXMuI3JlY3JlYXRlRmlsZUluZGV4QmluZGluZylcblx0XHRcdClcblx0XHRcdHRoaXMucmVnaXN0ZXJFdmVudChcblx0XHRcdFx0dGhpcy5hcHAudmF1bHQub24oXCJkZWxldGVcIiwgdGhpcy4jcmVjcmVhdGVGaWxlSW5kZXhCaW5kaW5nKVxuXHRcdFx0KVxuXHRcdFx0dGhpcy5yZWdpc3RlckV2ZW50KFxuXHRcdFx0XHR0aGlzLmFwcC52YXVsdC5vbihcInJlbmFtZVwiLCB0aGlzLiNyZWNyZWF0ZUZpbGVJbmRleEJpbmRpbmcpXG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXFDO0FBQXJDO0FBU0EsSUFBcUIseUJBQXJCLGNBQW1ELHVCQUFPO0FBQUEsRUFBMUQ7QUFBQTtBQUdDLHlCQUEwQixDQUFDO0FBOEUzQix1RUFBaUQsS0FBSyx1Q0FBdUMsS0FBSyxJQUFJO0FBQ3RHLGtEQUE0QixLQUFLLGtCQUFrQixLQUFLLElBQUk7QUFBQTtBQUFBLEVBN0U1RCxNQUFNLHNCQUFzQjtBQUMzQixVQUFNLGFBQWEsS0FBSyxJQUFJLE1BQU0sc0JBQXNCLHVCQUFzQixnQkFBZ0I7QUFFOUYsUUFBRyxlQUFlLE1BQU07QUFDdkIsY0FBUSxNQUFNLDhFQUE4RSx1QkFBc0IsZ0JBQWdCO0FBQ2xJLFdBQUssZ0JBQWdCLENBQUM7QUFBQSxJQUN2QixXQUNRLHNCQUFzQix5QkFBUztBQUN0QyxjQUFRLE1BQU0sb0ZBQW9GLHVCQUFzQixnQkFBZ0I7QUFDeEksV0FBSyxnQkFBZ0IsQ0FBQztBQUFBLElBQ3ZCLFdBQ1Esc0JBQXNCLHVCQUFPO0FBQ3BDLFlBQU0sYUFBYSxNQUFNLEtBQUssSUFBSSxNQUFNLFdBQVcsVUFBVTtBQUM3RCxZQUFNLGlCQUEyQixLQUFLLE1BQU0sVUFBVTtBQUN0RCxXQUFLLGdCQUFnQixlQUFlLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7QUFDOUQsY0FBUSxNQUFNLHlEQUF5RCxLQUFLLGFBQWE7QUFBQSxJQUMxRixPQUNLO0FBQ0osY0FBUSxNQUFNLGtGQUFrRix1QkFB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