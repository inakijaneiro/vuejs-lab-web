new Vue({
    el: "#root",
    data: {
        value: "hello, world",
        fotoPerro: "https://as.com/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg",
        fotoGato: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg",
        fotoConejo: "https://t2.ea.ltmcdn.com/es/images/0/7/1/cuidados_del_conejo_3170_orig.jpg",
        fotosAdopcion: [
            "https://www.infobae.com/new-resizer/JJZrjxaj9APTbS8DnuDkIQ-4iko=/420x236/filters:format(jpg):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/04/06155038/perro-beso-1024x576.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUFKfqx2K8BNblQ7RoBQ4DJjW11ZIvPjnLXw&usqp=CAU",
            "https://okdiario.com/img/2019/07/22/enfermedades-que-puede-tener-tu-conejo-como-mascota.jpg",
            "https://sites.google.com/site/cuidadosparacu/_/rsrc/1477415806668/home/39243c119cf2c600810425ab1e4ae231.jpg",
            "https://www.animalesexoticos.org/wp-content/uploads/2020/02/periquito-esmeralda.jpg"
        ],
        nombre: "",
        selectedImageIndex: 0,
        adoptado: false
    },
    methods: {
        changeImageIndex: function() {
            this.selectedImageIndex += 1;
            if (this.selectedImageIndex >= this.fotosAdopcion.length) this.selectedImageIndex = 0;
        } 

    }
})