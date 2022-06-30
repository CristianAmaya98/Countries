import { environment } from "src/environments/environment";

export class BaseComponent {

    protected themes: string[] = environment.themes;

    protected toogleModoOscuro(theme: string) {
        const body = document.body;
        body.classList.remove((theme == this.themes[0]) ? this.themes[1] : this.themes[0]);
        body.classList.add(theme)
    }
}