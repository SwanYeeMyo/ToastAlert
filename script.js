const btn=document.querySelector('button'),
      toast=document.querySelector('.toast'),
      CloseIcon=document.querySelector('.close'),
      progress=document.querySelector('.progress');

      btn.addEventListener('click',()=>{
          toast.classList.add('active');
          progress.classList.add('active');
          setTimeout(() => {
            toast.classList.remove('active');
            progress.classList.remove('active');
          }, 5000);
      })
      CloseIcon.addEventListener('click',()=>{
          toast.classList.remove('active');
          progress.classList.remove('active');
      })