'use babel';

import Superbonus888 from '../lib/superbonus888';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Superbonus888', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('superbonus888');
  });

  describe('when the superbonus888:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.superbonus888')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'superbonus888:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.superbonus888')).toExist();

        let superbonus888Element = workspaceElement.querySelector('.superbonus888');
        expect(superbonus888Element).toExist();

        let superbonus888Panel = atom.workspace.panelForItem(superbonus888Element);
        expect(superbonus888Panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'superbonus888:toggle');
        expect(superbonus888Panel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.superbonus888')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'superbonus888:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let superbonus888Element = workspaceElement.querySelector('.superbonus888');
        expect(superbonus888Element).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'superbonus888:toggle');
        expect(superbonus888Element).not.toBeVisible();
      });
    });
  });
});
