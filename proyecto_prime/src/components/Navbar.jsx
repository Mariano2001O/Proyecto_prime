
//navbar
import { Menubar } from 'primereact/menubar';

export const Navbar = () => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-file',
            url: '/'
        } , 
        {
            label: 'Pagina 1',
            icon: 'pi pi-fw pi-file',
            url: '/pagina1'
        }, 
        {
            label: 'Pagina 2',
            icon: 'pi pi-fw pi-file',
            url: '/pagina2'
        }
    ]
    return (
    <Menubar model={items}/>    
    )
}
