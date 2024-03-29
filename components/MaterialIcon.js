// place an icon using font awesome web font (https://fontawesome.com)
export default function MaterialIcon(type){
    switch (type){
        case 'Paper':
            return '<i class="far fa-file-alt"></i>';
        case 'Video':
            return '<i class="fas fa-video"></i>';
        case 'Demo':
            return '<i class="fas fa-desktop"></i>';
        case 'ExternalLink':
            return '<i class="fas fa-external-link-alt"></i>';
    }
}