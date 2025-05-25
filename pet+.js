document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('adoptionConfirmationModal');
    const closeButton = document.querySelector('.close-button');
    const confirmAdoptionBtn = document.getElementById('confirmAdoptionBtn');
    const cancelAdoptionBtn = document.getElementById('cancelAdoptionBtn');
    const animalNameInModal = document.getElementById('animalNameInModal');

    // Seleciona todos os botões "Quero Adotar"
    const adoptButtons = document.querySelectorAll('.animal-card .btn-primary');

    let currentAnimalName = ''; // Variável para armazenar o nome do animal clicado

    // Função para abrir o modal
    function openModal(animalName) {
        currentAnimalName = animalName;
        animalNameInModal.textContent = animalName; // Define o nome do animal no modal
        modal.style.display = 'flex'; // Exibe o modal
        // Adiciona um listener para fechar o modal se o usuário pressionar ESC
        document.addEventListener('keydown', handleEscapeKey);
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none'; // Esconde o modal
        // Remove o listener do ESC quando o modal é fechado
        document.removeEventListener('keydown', handleEscapeKey);
    }

    // Função para lidar com a tecla ESC
    function handleEscapeKey(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    // Adiciona evento de clique para cada botão "Quero Adotar"
    adoptButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link/botão
            // Pega o nome do animal do h3 dentro do mesmo card
            const animalName = this.closest('.animal-card').querySelector('h3').textContent;
            openModal(animalName);
        });
    });

    // Evento de clique no botão de fechar (X)
    closeButton.addEventListener('click', closeModal);

    // Evento de clique no botão "Cancelar" do modal
    cancelAdoptionBtn.addEventListener('click', closeModal);

    // Evento de clique no botão "Sim, Quero Adotar!" do modal
    confirmAdoptionBtn.addEventListener('click', function() {
        // Em um projeto real, aqui você processaria a solicitação de adoção,
        // talvez enviando um formulário para um servidor.
        // Por enquanto, mostraremos um alerta simples.
        alert('Obrigado! Sua solicitação de adoção para o(a) ' + currentAnimalName + ' foi enviada. Entraremos em contato em breve!');
        closeModal();
    });

    // Fechar o modal se clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Animação de scroll suave para os links do menu
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll suave para o botão principal da hero section
    const heroButton = document.querySelector('.hero-section .btn-primary');
    if (heroButton) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Scroll suave para os botões 'Ver Todos' e 'Saiba Mais'
    document.querySelectorAll('.highlight-card .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) { // Garante que é um link interno
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                // Se não for um link interno (como o "Veja Nossas Ações" que não tem alvo específico aqui),
                // pode-se adicionar outra lógica ou simplesmente ignorar.
            }
        });
    });

    // Scroll suave para o botão 'Entre em Contato para Parceria'
    const partnershipButton = document.querySelector('.partnerships .btn-primary');
    if (partnershipButton) {
        partnershipButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

});