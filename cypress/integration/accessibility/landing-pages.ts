context('Accessibility', () => {
  ;[{ title: 'Home', url: '/' }].forEach((page) => {
    describe(page.title, () => {
      before(() => {
        cy.visit(page.url)
        cy.injectAxe()
      })

      it('uses aria attributes where necessary', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.aria'],
        })
      })

      it('uses appropriate contrast and colours', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.color'],
        })
      })

      it('uses forms correctly', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.forms'],
        })
      })

      it('allows using a keyboard to navigate', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.keyboard'],
        })
      })

      it('defines the content language', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.language'],
        })
      })

      it('uses titles and roles for important elements', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.name-role-value'],
        })
      })

      it('parses correctly', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.parsing'],
        })
      })

      it('holds semantically correct content', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.semantics'],
        })
      })

      it('uses appropriate sensory and visual cues', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.sensory-and-visual-cues'],
        })
      })

      it('has well structured content', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.structure'],
        })
      })

      it('has accessible tables', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.tables'],
        })
      })

      it('supports screen readers by using alternative texts', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.text-alternatives'],
        })
      })

      it('allows users to control media in their own time', () => {
        cy.checkA11y(null, {
          runOnly: ['cat.time-and-media'],
        })
      })
    })
  })
})
