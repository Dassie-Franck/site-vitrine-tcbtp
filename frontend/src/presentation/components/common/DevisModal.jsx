import React, { createContext, useContext, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Modal,
  TextField,
  Grid,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// 1. Création du Context
const DevisModalContext = createContext();

// Thème de couleurs BTP / Construction
const themeColors = {
  primary: "#25D366",       // Couleur officielle WhatsApp pour le bouton d'envoi
  primaryHover: "#1EBE5D",
  accent: "#1E293B",        // Gris ardoise sombre
};

// 2. Le Provider qui enveloppera l'application
export function DevisModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Numéro WhatsApp de l'entreprise (Remplacez par votre numéro au format international sans le +)
    // Exemple pour le Cameroun : 2376XXXXXXXX
    const phoneNumber = "237699633882"; 

    // Construction du message structuré
    const text = 
      `*NOUVELLE DEMANDE DE DEVIS - TC BTP*\n\n` +
      `*Nom & Prénom :* ${formData.name}\n` +
      `*Email :* ${formData.email}\n` +
      `*Téléphone :* ${formData.phone}\n` +
      `*Type de service :* ${formData.projectType}\n` +
      `*Description du projet :* \n${formData.message}`;

    // Encodage du texte pour l'URL
    const encodedText = encodeURIComponent(text);

    // Ouverture de WhatsApp dans un nouvel onglet
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");

    // Réinitialisation et fermeture du modal
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    closeModal();
  };

  // Style du Modal
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "80%", md: "600px" },
    bgcolor: "background.paper",
    boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
    borderRadius: 2,
    p: { xs: 3, md: 4 },
    maxHeight: "90vh",
    overflowY: "auto",
  };

  return (
    <DevisModalContext.Provider value={{ openModal }}>
      {children}

      {/* Le Modal unique et global */}
      <Modal open={isOpen} onClose={closeModal} aria-labelledby="modal-devis-title">
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography id="modal-devis-title" variant="h5" sx={{ fontWeight: 800, color: themeColors.accent }}>
              Demande de Devis - TC BTP
            </Typography>
            <IconButton onClick={closeModal} size="small" aria-label="Fermer">
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ color: "#64748B", mb: 3 }}>
            Remplissez ce formulaire pour envoyer directement les détails de votre projet à notre équipe technique sur WhatsApp.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Nom & Prénom" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  size="small" 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Adresse Email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  size="small" 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Numéro de Téléphone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  size="small" 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  select 
                  label="Type de service / projet" 
                  name="projectType" 
                  value={formData.projectType} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  size="small"
                >
                  <MenuItem value="">Sélectionnez un service</MenuItem>
                  <MenuItem value="Gros Œuvre">Gros Œuvre</MenuItem>
                  <MenuItem value="Construction de Bâtiments">Construction de Bâtiments</MenuItem>
                  <MenuItem value="Carrelage & Finitions de sols">Carrelage & Finitions de sols</MenuItem>
                  <MenuItem value="Finition de Bâtiments">Finition de Bâtiments</MenuItem>
                  <MenuItem value="Construction & Finition Clés en Main">Construction & Finition Clés en Main</MenuItem>
                  <MenuItem value="Vente de Matériel BTP">Vente de Matériel BTP</MenuItem>
                  <MenuItem value="Location de Matériel BTP">Location de Matériel BTP</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Décrivez votre projet en quelques lignes" 
                  name="message" 
                  multiline 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                />
              </Grid>
            </Grid>

            <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: "flex-end" }}>
              <Button onClick={closeModal} variant="outlined" sx={{ color: "#64748B", borderColor: "#CBD5E1", textTransform: "none" }}>
                Annuler
              </Button>
              <Button 
                type="submit" 
                variant="contained"  
                disableElevation 
                startIcon={<WhatsAppIcon />}
                sx={{ 
                  bgcolor: themeColors.primary, 
                  "&:hover": { bgcolor: themeColors.primaryHover }, 
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Envoyer sur WhatsApp
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </DevisModalContext.Provider>
  );
}

// 3. Le Hook personnalisé pour utiliser ce Context facilement
export function useDevisModal() {
  const context = useContext(DevisModalContext);
  if (!context) {
    throw new Error("useDevisModal doit être utilisé à l'intérieur d'un DevisModalProvider");
  }
  return context;
}

export default DevisModalProvider;