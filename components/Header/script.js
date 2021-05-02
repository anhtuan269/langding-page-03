export default {
    props: {
      menu: {
        type: Array,
        require: true,
        default() {
          return [
            {
              id: 1,
              page: 'XİDMƏTLƏR',
              link:''
            },
            {
              id: 2,
              page: 'HAQQIMIZDA',
              link:'HAQQIMIZDA'
  
            },
            {
              id: 3,
              page: 'ƏLAQƏ',
              link:'ƏLAQƏ'
            },
          ];
        },
      },
    },
  };