
//navbar
import { Menubar } from 'primereact/menubar';

export const Navbar = () => {
    const items = [
        {
            label: 'Correr',
            icon: 'pi pi-fw pi-file',
            url: '/'
        } , 
        {
            label: 'Beneficios',
            icon: 'pi pi-fw pi-file',
            url: '/pagina1'
        }, 
        {
            label: 'Cuidados',
            icon: 'pi pi-fw pi-file',
            url: '/pagina2'
        }
    ]
    return (
    <Menubar model={items}/>    
    )
}
