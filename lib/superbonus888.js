'use babel';

import Superbonus888View from './superbonus888-view';
import { CompositeDisposable } from 'atom';

export default {

  superbonus888View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.superbonus888View = new Superbonus888View(state.superbonus888ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.superbonus888View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'superbonus888:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.superbonus888View.destroy();
  },

  serialize() {
    return {
      superbonus888ViewState: this.superbonus888View.serialize()
    };
  },

  toggle() {
    console.log('Superbonus888 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
