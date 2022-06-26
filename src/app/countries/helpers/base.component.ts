export class BaseComponent {

    protected toogleModoOscuro(theme: string) {
        const body = document.body;
        body.classList.remove(theme);
        body.classList.add((theme == 'lightTheme') ? 'darkTheme' : 'lightTheme')
    }
}