export default {
    name: 'Test',

    setup() {
        const title = "Vue 3 with @manejandodatos";
        
        return {
            title
        };
    },
    template: `
      <div>
        <h1>{{title}}</h1>
      </div>
    `,
};