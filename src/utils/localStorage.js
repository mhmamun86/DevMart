import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const getApps = () => {
  try {
    const data = localStorage.getItem('installed');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const updateApps = (app, installed, setInstalled) => {
  const isDuplicate = installed.some(el => el.id === app.id);
  if (isDuplicate) {
    return installed;
  } else {
    const updated = [...installed, app];
    localStorage.setItem('installed', JSON.stringify(updated));
    toast.success(`Successfully Installed ${app.title} `);
    setInstalled(updated);
    return updated;
  }
};

const removeApps = (id, setInstalled) => {
  const installed = getApps();
  const getApp = installed.find(a => a.id === id);

  Swal.fire({
    title: `Uninstall <br/> ${getApp.title} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Uninstall!',
  }).then(result => {
    if (result.isConfirmed) {
      toast.success('Uninstalled successfully!');
      const updatedInstalledApps = installed.filter(a => a.id !== id);
      localStorage.setItem('installed', JSON.stringify(updatedInstalledApps));
      setInstalled(updatedInstalledApps);

      return updatedInstalledApps;
    }
  });
};

export { getApps, updateApps, removeApps };
