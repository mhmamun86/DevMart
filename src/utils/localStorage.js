const getApps = () => {
  try {
    const data = localStorage.getItem('installed');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const updateApps = app => {
  const installed = getApps();
  const isDuplicate = installed.some(el => el.id === app.id);
  if (isDuplicate) return installed;

  const updated = [...installed, app];
  localStorage.setItem('installed', JSON.stringify(updated));
  return updated; // 👈 return updated list
};

const removeApps = id => {
  const installed = getApps();
  try {
    const updatedInstalledApps = installed.filter(a => a.id !== id);
    localStorage.setItem('installed', JSON.stringify(updatedInstalledApps));
    return updatedInstalledApps;
  } catch (err) {
    console.log(err);
  }
};

export { getApps, updateApps, removeApps };
