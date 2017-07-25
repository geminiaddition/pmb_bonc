package com.bonc.action.jihe;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.jihe.AuditDao;
import com.bonc.model.jihe.AuditBean;
import com.bonc.model.jihe.AuditdatilBean;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class AuditAction extends ActionSupport {

	@Autowired
	public AuditDao adao;
	public List<AuditBean> getaudit;
	public List<AuditdatilBean> getad;

	public String audit() {
		from();
		return "index";
	}

	public String from() {
		getaudit = adao.getaudit();
		getad = adao.getauditdatil();
		return "from";
	}

	public List<AuditBean> getGetaudit() {
		return getaudit;
	}

	public void setGetaudit(List<AuditBean> getaudit) {
		this.getaudit = getaudit;
	}

	public List<AuditdatilBean> getGetad() {
		return getad;
	}

	public void setGetad(List<AuditdatilBean> getad) {
		this.getad = getad;
	}

}
