
//navbar
import { Menubar } from 'primereact/menubar';

export const Navbar = () => {
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-file',
            url: '/'
        } , 
        {
            label: 'Acerca de',
            icon: 'pi pi-fw pi-file',
            url: '/pagina1'
        }, 
        {
            label: 'Ubicacion',
            icon: 'pi pi-fw pi-file',
            url: '/pagina2'
        }
    ]
    return (
    <Menubar model={items}/>    
    )
}
